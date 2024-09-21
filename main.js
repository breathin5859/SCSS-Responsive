// 이미지 압축용 js

import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";

const INPUT = ["images/*.{jpg,png,svg}"]; //이미지 압출을 진행할 폴더
const OUTPUT = "images/"; //압축된 이미지를 저장할 폴더

const files = await imagemin(INPUT, {
  destination: OUTPUT,
  plugins: [
    imageminJpegtran(),
    imageminPngquant({
      quality: [0.6, 0.8],
    }),
  ],
});

console.log("이미지 압축에 성공했습니다");
