import Compressor from 'compressorjs';
import { post } from '@/helpers/http';

export function compressAndPostImage(file, route) {
  return new Promise((resolve, reject) => {
    const options = {
      strict: true,
      checkOrientation: true,
      quality: 0.8,
      convertTypes: ['image/png'],
      convertSize: 10000,
      success(result) {
        const formData = new FormData();
        formData.append('file', result);
        post(route, formData, { 'Content-Type': 'multipart/form-data' })
          .then(({ data }) => {
            resolve(data);
          });
      },
      error(err) {
        reject(err);
      },
    };
    new Compressor(file, options);
  });
}
