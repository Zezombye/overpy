
content = content.toLowerCase();
content = content.replace("弹道", "飞弹");
content = content.replace(/设置不可见\((.+?),\s全部禁用\);/g,(match,first)=>`设置不可见(${first}, 无);`);
//For some reason the result of content.replace returns an object with JS interpreter
content.toString();
