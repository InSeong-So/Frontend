interface LoginTemplateProps {
  form: 'login' | 'signup';
}

const LoginTemplate = ({ form = 'login' }: LoginTemplateProps) => {
  return `
    <div class="container">
      <div class="login-type">
        <span>이메일 로그인</span>
      </div>
      ${
        form === 'login'
          ? `
            <div class="login-form">
              <div class="control-group">
                <input type="text" class="login-field" placeholder="이메일" id="login-name">
                <label class="login-field-icon fui-user" for="login-name"></label>
              </div>

              <div class="control-group">
                <input type="password" class="login-field" placeholder="비밀번호" id="login-pass">
                <label class="login-field-icon fui-lock" for="login-pass"></label>
              </div>

              <a id="loginButton" class="btn btn-primary btn-large btn-block" href="#">로그인</a>
              <p data-component="signup">회원가입을 하시겠어요?</p>
            </div>`
          : `
            <div class="signup-form">
              <div class="control-group">
                <input type="text" class="login-field" placeholder="이메일" id="signup-name">
                <label class="login-field-icon fui-user" for="signup-name"></label>
              </div>

              <div class="control-group">
                <input type="password" class="login-field" placeholder="비밀번호" id="signup-pass">
                <label class="login-field-icon fui-lock" for="signup-pass"></label>
              </div>

              <div class="control-group">
                <input type="password" class="login-field" placeholder="비밀번호 확인" id="signup-pass-check">
                <label class="login-field-icon fui-lock" for="signup-pass-check"></label>
              </div>

              <a id="signupButton" class="btn btn-primary btn-large btn-block" href="#">회원가입</a>
              <p data-component="login">로그인을 하시겠어요?</p>
            </div>`
      }
      </div>`;
};

export default LoginTemplate;
