import ImageKit from "imagekit";
import { IncomingForm } from "formidable";
import { promises as fs } from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const imagekit = new ImageKit({
  publicKey:
    process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_API_KEY ||
    "public_zRyDn0CxiwVMKIzA5MHt+e6ZqWU=",
  privateKey:
    process.env.IMAGE_KIT_PRIVATE_KEY || "private_jwsHoSaa0EBLOdgfEIoL3oySIkE=",
  urlEndpoint:
    process.env.IMAGE_KIT_URL_ENDPOINT || "https://ik.imagekit.io/6u21am5i7",
});

const handler = async (req, res) => {
  try {
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();

      form.encoding = "base64";

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const contents = await fs.readFile(data.files.null.path, {
      encoding: "base64",
    });

    const result = await imagekit.upload({
      file: contents,
      fileName: new Date().toISOString() + "test.jpg",
    });
    if (result) {
      const url = imagekit.url({
        src: result.url,
        transformation: [
          {
            height: "512",
            width: "512",
          },
        ],
      });
      res.status(200).json({
        url,
      });
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err });
  }
};

export default handler;
