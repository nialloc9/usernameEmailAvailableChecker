//USERNAME CHECK
function checkIfAvailable(userInput, button, infobox, successClass, errorClass, successMessage, errorMessage, databaseColName, pathToCheckValidatePhp){
    //ASSIGN VARIABLE
    var ju = '#'+userInput;
    var jb = '#'+button;
    var ji = '#'+infobox;

    //GET USER INPUT VALUE
    var u = $(ju).val();

    if(u.length > 0){
        //HTTP
        $.get(pathToCheckValidatePhp, {
            task: 'checkExists',
            databaseColName: databaseColName,
            userInput: u
        }).success(function(data){
            //DATA CHECK
            if(data == 1){
                console.log('SUCCESS: '+ databaseColName + ' '+ userInput +' available.. adding info message and enabling button..');

                //ENABLE BUTTON
                if($(jb).attr('disabled') == 'disabled'){
                    $(jb).removeAttr('disabled');
                }else{

                }

                //ADD INFO
                $(ji).text(successMessage);

                //SUCCESS CLASS CHECK
                if($(ji).hasClass(successClass)){
                    //DO NOTHING
                }else{
                    $(ji).addClass(successClass);
                }

            } else {
                console.log('ERROR: ' + databaseColName + ' '+ u +' unavailable.. adding info message and disabling button..');

                //DISABLE BUTTON
                if($(jb).attr('disabled') == 'disabled'){

                }else{
                    $(jb).attr("disabled","disabled");
                }

                //ADD INFO
                $(ji).text(errorMessage);

                //SUCCESS CLASS CHECK
                if($(ji).hasClass(successClass)){
                    $(ji).removeClass(successClass);
                }

                //ERROR CLASS CHECK
                if($(ji).hasClass(errorClass)){
                    //DO NOTHING
                }else{
                    $(ji).addClass(errorClass);
                }
            }

        }).error(function(){
            console.log('ERROR: checkIfAvailable() http request failure.');
        })
    }else{

        //USER INPUTS NOTHING

        //ADD INFO
        $(ji).text('');

        //DISABLE BUTTON
        if($(jb).attr('disabled') == 'disabled'){

        }else{
            $(jb).attr("disabled","disabled");
        }
    }
}