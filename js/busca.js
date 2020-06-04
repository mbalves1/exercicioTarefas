
const campoBusca = $('#busca');

campoBusca.on('input', function(){
    const textoCampoBusca = $(this).val().trim();

    if(textoCampoBusca.length > 0){
        $(".teste-class").hide().filter(function(){
            return $(this).find(".pesquisa").text().match(new RegExp(textoCampoBusca, "i"))
        }).show();
    }else{
        $('.teste-class').show();
    }
}
)
