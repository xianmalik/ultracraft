module.exports = {
	env: {
		ip: 'play.ultracraftbd.com',
	},
	images: {
		domains: [
			'assets.vercel.com',
			'res.cloudinary.com',
		],
	},
	async redirects() {
		return [
			{
				source: '/discord',
				destination: 'https://discord.gg/ultracraft',
				permanent: true,
			},
		]
	},
}