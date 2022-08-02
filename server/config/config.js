const TABLE_NAME = 'StudentSaver';
const config = {
    PORT: process.env.PORT || 5000,
        DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
    DB_CONNECTION: `mongodb://localhost:27017/student-services`,
    SECRET: 'secret123',
    SALT: 10,
    COOKIE_NAME: 'USER_SESSION',
    CLOUDINARY_NAME: 'studentsaver',
    CLOUDINARY_API_KEY: 194462863141282,
    CLOUDINARY_API_SECRET: '6dhQYk87FVj-JMMHoeKiw7d1FlQ',
    CLOUDINARY_STORAGE: 'dmpf1ttrq'
    // AWS_ACCESS_KEY_ID: 'AKIAT2BSJS4GTMEMPM5R',
    // AWS_ACCESS_KEY_SECRET: '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',
    // AWS_BUCKET_NAME: "student-saver"
//     <CloudinaryContext cloudName="dmpf1ttrq">
//   <div>
//     <Image publicId="sample" width="50" />
//   </div>
//   <Image publicId="sample" width="0.5" />
// </CloudinaryContext>
}
module.exports = config; 