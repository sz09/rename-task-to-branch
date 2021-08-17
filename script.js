var hideInput = '#linkToCopy';
function generate(){
  var text = $('#inputString').val();
  if(!text){
    return;
  }
  
  var value = getBranchName(text);
  setValueToHideInput(value);
  copyToClipboard();
  successToast();
}

function getBranchName(text){
  var regex = new RegExp(/[^a-zA-Z0-9]/g);
  return text.replace(regex, '_');
}

function successToast(){
  $.Toast("Information", "Copied to clipboard!", "success", {
          has_icon:true,
          has_close_btn:true,
	  stack: true,
          fullscreen:false,
          timeout:4000,
          sticky:false,
          has_progress:true,
          rtl:false,
    });
}

function setValueToHideInput(value){
   $(hideInput).val(value);
}

function copyToClipboard(){
    $(hideInput).select();      
    document.execCommand("copy");
}
