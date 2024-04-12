require('es6-promise');
require('isomorphic-fetch');
import fetchJsonp from 'fetch-jsonp';

const ContentType = {
	JSON: 'Content-Type: application/json;charset=UTF-8',
	FORM: 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8'
};

var fetchHelp = {
	// get请求
	getJSON: function(url, params){
		if(params){
			let paramsArray = [];  
			// 请求的参数  
			Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
			if (url.search(/\?/) === -1) {  
				url += '?' + paramsArray.join('&')  
			}else{
				url += '&' + paramsArray.join('&')
			}
			url += '&t='+new Date().getTime();
		}else{
			url += '?t='+new Date().getTime();
		}
		
		return new Promise((resolve, reject)=>{
			fetch(url, {
				method: 'GET',
				credentials: 'include',
			}).then((response)=>{
				return response.json();
			}).then((response)=>{
				resolve(response);
			}).catch((error)=>{
				console.log(error);
			});
		});
	},

	// post请求
	postJSON: function(url, params){
		return new Promise((resolve, reject)=>{
			fetch(url, {
				method: 'POST',
				credentials: 'include',
				headers:{
					'Content-Type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify(params),
			}).then((response)=>{
				return response.json();
			}).then((response)=>{
				resolve(response);
			}).catch((error)=>{
				console.log(error);
			});
		});
	},

	// delete请求
	deleteJSON: function(url, params){
		if(params){
			let paramsArray = [];  
			// 请求的参数  
			Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
			if (url.search(/\?/) === -1) {  
				url += '?' + paramsArray.join('&')  
			}else{
				url += '&' + paramsArray.join('&')
			}
			url += '&t='+new Date().getTime();
		}else{
			url += '?t='+new Date().getTime();
		}
		
		return new Promise((resolve, reject)=>{
			fetch(url, {
				method: 'DELETE',
				credentials: 'include',
			}).then((response)=>{
				return response.json();
			}).then((response)=>{
				resolve(response);
			}).catch((error)=>{
				console.log(error);
			});
		});
	},

	// put请求
	putJSON: function(url, params){
		if(params){
			let paramsArray = [];  
			// 请求的参数  
			Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
			if (url.search(/\?/) === -1) {  
				url += '?' + paramsArray.join('&')  
			}else{
				url += '&' + paramsArray.join('&')
			}
			url += '&t='+new Date().getTime();
		}else{
			url += '?t='+new Date().getTime();
		}
		
		return new Promise((resolve, reject)=>{
			fetch(url, {
				method: 'PUT',
				credentials: 'include',
			}).then((response)=>{
				return response.json();
			}).then((response)=>{
				resolve(response);
			}).catch((error)=>{
				console.log(error);
			});
		});
	},

	// jsonp请求
	jsonp: function(url, params){
		if(params){
			let paramsArray = [];  
			// 请求的参数  
			Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
			if (url.search(/\?/) === -1) {  
				url += '?' + paramsArray.join('&')  
			}else{
				url += '&' + paramsArray.join('&')
			}
			url += '&t='+new Date().getTime();
		}else{
			url += '?t='+new Date().getTime();
		}

		return new Promise((resolve, reject)=>{
			fetchJsonp(url, {
				jsonpCallback: 'jsoncallback',
				// jsonpCallbackFunction: 'jsoncallback',
			}).then((response)=>{
				return response.json();
			}).then((response)=>{
				resolve(response);
			}).catch((error)=>{
				console.log(error);
			});
		});
	}

};

export default fetchHelp;