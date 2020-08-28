$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = 
        `<div class="Message-box">
          <div class="Message-box__user">
            <div class="Message-box__user-name">
              ${message.user_name}
            </div>
            <div class="Message-box__date-time">
              ${message.created_at}
            </div>
          </div>
          <div class="Message-box__message">
            <p class="Message__body">
              ${message.body}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html = 
      `<div class="Message-box">
        <div class="Message-box__user">
          <div class="Message-box__user-name">
            ${message.user_name}
          </div>
          <div class="Message-box__date-time">
            ${message.created_at}
          </div>
        </div>
        <div class="Message-box__message">
          <p class="Message__body">
            ${message.body}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form-box').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('form')[0].reset();
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      $('.Form-box__btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});