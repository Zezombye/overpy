
/**
 * 
 * @param {string} content 
 * @returns 
 */
function postCompileHook(content){
    let resultText = content;
    //DoSomething... Just an example
    resultText = resultText.replace("弹道", "飞弹")
    resultText = resultText.replace(/设置不可见\((.+?),\s全部禁用\);/g,
        (match,first)=>`设置不可见(${first}, 无);`)

    return String(resultText);
}
                