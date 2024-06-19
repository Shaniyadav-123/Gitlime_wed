export default function formadd(req, res) {
	if (req.method === 'POST') {
		const reqPayload = req?.body;
		console.log('Req Payload: hit the post api', reqPayload);
		return res.json({
			msg: 'post hitted',
		});
	}
	return res.status(500).json({
		msg: 'something is wrong in post request',
	});
}
