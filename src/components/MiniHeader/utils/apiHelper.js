// import $ from 'jQuery';
import axios from 'axios';
import jsonp from 'jsonp';

export default function ({
	method = 'GET',
	url,
	data = {},
	success,
	error,
	done,
	jsonp,
	jsoncallback,
	dataType = 'json',
	...res
}) {
	let _url = url;
	let _data = { ...data };
	let param = {
		method,
		url: _url,
		data: _data,
		withCredentials: true,
		crossDomain: true,
		success: data => {
			if (success) {
				success(data);
			}
		},
		error: (err) => {
			if (error) {
				error(err);
			}
		},
		complete: (xhr,status) => {
			if (done) {
				done(xhr,status);
			}
		},
	};
	if (method.toUpperCase() === 'POST') {
		param = Object.assign({}, param, {
			dataType : 'json',
			contentType:'application/json;charset=utf-8',
		});
	}
	// jsonp 的设置
	param = Object.assign({}, param,
		// jsonp && {
		// 	jsonp,
		// 	dataType,
		// },
		jsoncallback && {
			jsoncallback,
		},
	);
	if (param.jsoncallback) {
		doJsonp(param);
		return;
	}
	doAxios(param);
}

const doJsonp = (param) => {
	const { url, jsoncallback } = param;
	jsonp(url, { param: jsoncallback }, (err, data) => {
		if (err) {
			console.error(err.message);
		} else {
			param.success(data);
		}
	});
};

const doAxios = (param) => {
	axios(param)
	.then(res => {
		// 防止axios被拦截后，处理过 Response.data
		const data = res.status ? res.data : res;
		param.success(data);
	})
	.catch(err => {
		param.error(err);
	});
};