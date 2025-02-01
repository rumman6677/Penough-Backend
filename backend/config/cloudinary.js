const cloudinary = require("cloudinary").v2;

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			cloud_name: 'dkojx8lk3',
			api_key: '252942628942585',
			api_secret: '<your_api_secret>'
		});
		console.log('Cloudinary connected successfully')
	} catch (error) {
		console.log(error);
	}
};


