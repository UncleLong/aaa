﻿(function (w) {
    var CameraBox = {
        init: function () {
            $(".partOneRight .PicShow .showBox").hide();
            //$(".cameraBox").show();
            var video = document.getElementById('v');
            $(".CameraTips").show();
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                    getVideo();
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                });
            } else if (navigator.getUserMedia) { // Standard
                navigator.getUserMedia({ video: true }, function (stream) {
                    getVideo();
                    video.src = stream;
                    video.play();
                }, errBack);
            } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
                navigator.webkitGetUserMedia({ video: true }, function (stream) {
                    getVideo();
                    video.src = window.webkitURL.createObjectURL(stream);
                    video.play();
                }, errBack);
            } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
                navigator.mozGetUserMedia({ video: true }, function (stream) {
                    getVideo();
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                }, errBack);
            } else {

            }
            
            function getVideo(){
                $(".CameraTips").hide();
                $(".cameraCover").show();
                $(".cameraBox").animate({ "top": "0" }, 300);
                // Trigger photo take
                document.getElementById("snap").addEventListener("click", function () {
                    video.style.visibility = "hidden";
                    $("#canvasCemara").css("visibility", "visible");
                    canvas = document.getElementById('canvasCemara');
                    ctx = canvas.getContext('2d');
                    var _w = 520, _h = 520;
                    if (video.videoWidth > 0) _h = video.videoHeight / (video.videoWidth / _w);
                    canvas.setAttribute('width', _w);
                    canvas.setAttribute('height', _h);
                    ctx.fillRect(0, 0, _w, _h);
                    ctx.drawImage(video, 0, 0, _w, _h);
                    $(".resetButton").show();
                    $(".shootButton").hide();
                    $("#reset").off("click").on("click", function () {
                        $(".resetButton").hide();
                        $(".shootButton").show();
                        video.style.visibility = "visible";
                        $("#canvasCemara").css("visibility", "hidden");
                    });
                    $("#confirm").off("click").on("click", function () {
                        $(".cameraCover").hide();
                        $(".cameraBox").css("top", "-600px");
                        U.handleImageCatch("shoot");
                    });
                });
            }
        },
    }
    var U = {
        init: function () {
            if ((navigator.mediaDevices && navigator.mediaDevices.getUserMedia) || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
                $(".cameraShoot").on("click", CameraBox.init);
            } else {
                $(".cameraShoot img").attr("../img/Upload/icon_camera_grey.png");
                $(".cameraShoot").css("cursor", "not-allowed");
            }
            this.EventBind();
        },
        EventBind: function () {
            var _ = this;
            var uploadPlugin = $(".showBox");
            var fileInput = $("#file");
            uploadPlugin.on("click", function () {
                fileInput.trigger("click");
            }).on("dragover", function (e) {
                e.preventDefault();
                e.stopPropagation();
            }).on("drop", function (e) {
                e.preventDefault();
                e.stopPropagation();
                fileInput.trigger("change", e.originalEvent.dataTransfer.files);
            });
            $(".uloadPhoto").on("click", function () {
                $(".CameraTips,.cameraBox").hide();
                $(".showBox").show();
                fileInput.trigger("click");
            });
            fileInput.on("change", function (e, drop) {
                if (document.getElementById("file").files.length == 0) {
                    return;
                }
                POP.ShowLoading();
                var f = document.getElementById("file").files[0] || drop;
                U.handleImageCatch("upload", f);
            });
            //关闭摄像头弹出层
            $(".cameraClose").on("click", function () {
                $(".cameraCover").hide();
                $(".cameraBox").css("top", "-600px");
            });
        },
        handleImageCatch: function (type, f) {
            var _this = this;
            GetUploadImage(f, type, function (result) {
                try {
                    document.getElementById("file").value = "";
                } catch (e) { }
                POP.CloseLoading();
                if (result.StatusCode == "0") {
                    var imgUrl = result.Files[0].FileUrl.replace("square-ali.manboker.com", "square.oss-cn-hangzhou.aliyuncs.com").replace("production-us.manboker.com", "moman-production-us.manboker.com");
                    //console.log(imgUrl);
                    CallAjax(MomentCam.urls.getFaceUidUrl, "url=" + imgUrl + "&useruid=0&platform=h5&language=zh", function (result) {
                        //POP.CloseLoading();
                        if (result.StatusCode == -4363402) {
                            POP.Alert("It seems there was an issue with the picture you used. Please try using a different picture!");
                            //POP.displayControl(0);
                        } else if (result.FaceUID == "") {
                            POP.Alert("Upload picture failed, Please upload again!");
                            POP.displayControl(0);
                        } else {
                            POP.displayControl(1);
                            localStorage.setItem('faceuid', result.FaceUID);
                            localStorage.setItem('offsetY', result.FaceOffsetY);
                            window.location.href = "beauty.html?v=" + Math.random();
                        }
                    })
                } else {
                    //console.log("上传失败");
                }
            })
        },
    }
    window.U = U;
})(window)