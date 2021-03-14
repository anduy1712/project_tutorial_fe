function Validator(formElement){

    function getParent(element,selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }

    }
    /*Email:required 
    fullname:required
    */ 
    var formRules = {}
    //obj chứa mảng valite
    var ruleInfo ={
        required: function(value){
            return value ? undefined : 'Vui long nhap truong nay'
        },
        email: function(value){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(value) ? undefined : 'Vui long nhap dung email'
        },
        min: function(min){
            return function(value){
                return value.length >= min ? undefined : `Vui long nhap toi thieu ${min} ki tu`;
            }
        },
        max: function(min){
            return function(value){
                return value.length <= min ? undefined : `Vui long nhap toi da ${min} ki tu`;
            }
        },
    }
    //Form 
    var formElement = document.querySelector(formElement);
    //Kiểm tra có thẻ form hay không 
    if(formElement)
    {
        //Mảng chứa input element
        var inputs = formElement.querySelectorAll('[name][rules]');
       
        //Lấy từng input element bỏ vào obj Info
        for (var input of inputs)
        {
           

            var rules = input.getAttribute('rules').split('|');
            // duyệt từng rule trong mảng 
            for (var rule of rules)
            {
                var rulesHasValue = rule.includes(':');
                var rulei;
                if(rulesHasValue)
                {
                    rulei = rule.split(':');
                    rule = rulei[0];
                    //cach 2
                    // ruleInfo[rule] = ruleInfo[rule](rulei[1]);
                }
                var ruleFunc = ruleInfo[rule]; //cach1
                if(rulesHasValue) //cach1
                {
                    ruleFunc = ruleFunc(rulei[1]);
                }
                //đẩy phần tử tiếp theo vào #2 
                if(Array.isArray(formRules[input.name]))
                {
                    formRules[input.name].push(ruleFunc);
                    
                }
                else{ //Tạo mảng và thêm phần tử vào (Chỉ chạy 1 lần) #1 
                    formRules[input.name] = [ruleFunc];
                }
                //Lang nghe su kien de valite (Blur, Input)
                input.onblur = handleValidate;
                input.oninput = handleClearError;

            }
            //ham message 

            function handleValidate(event){
                var rules = formRules[event.target.name];
                var errorMessage;

                rules.find(function(rule){
                    errorMessage = rule(event.target.value);
                    return errorMessage;
                })

                if(errorMessage){
                    
                    var formGroup = getParent(event.target,'.form-group');
                    formGroup.classList.add('invalid');
                    if(formGroup)
                    {
                        formMessage = formGroup.querySelector('.form-message');
                        formMessage.innerText = errorMessage;
                    }
                }
                return !errorMessage;
            }
            //ham clear message 

            function handleClearError(event){
                var formGroup = getParent(event.target,'.form-group');
                if(formGroup.classList.contains('invalid')){
                    formGroup.classList.remove('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    
                    if(formMessage)
                    {
                        
                        formMessage.innerText = '';
                    }
                }
            }



        }
         

    }
    
    //submit form 
    formElement.onsubmit = function(event){
        event.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        
        for (var input of inputs)
        {
            if(!handleValidate({target: input}))
            {
                isValid = false;
            }
            
        }
        if(isValid)
        {
            formElement.submit();
        }
    }
}



