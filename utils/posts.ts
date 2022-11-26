import https from 'https';

const data: {posts?: string[]} = {};

const gettem = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const dataUrl = process.env.DATA_URL;
    if (!dataUrl) {
      reject('no data url');
      return;
    }
    https.get(dataUrl, response => {
        let text = '';
        response.on('readable', () => {
          text += response.read().toString();
        });
        response.on('close', () => {
          resolve(text.split(/[\n\r][\n\r]+/));
        });
    });
  });
};

export const getPosts = async () => {
  if (!data.posts) {
    data.posts = await gettem();
  }
  return data.posts;
}
