<template lang="html">
  <div class="centerx icons-example">
    <div class="form">
      <div class="form__box">
        <div class="form__left">
          <div class="form__padding"><img  alt="im" class="form__image" src="./pp9.png" style="width: 100px;height: 100px"/></div>
        </div>
        <div class="form__right">
          <div class="form__padding-right">
            <form>
              <h1 class="form__title">Member Login</h1>
              <input class="form__email" type="text" placeholder="Email"/>
              <input class="form__password" type="text" placeholder="******"/>
              <input class="form__submit-btn" type="submit" value="Login"/>
            </form><span>Create Page<a class="form__link" href="#">Customer</a><a>/</a><a class="form__link" href="#">Manager</a></span>
            <p> <a class="form__link" href="#">Expert</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      value7:'',
      value8: ''
    }
  }
}
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Ubuntu:700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
  text-decoration: none;
}

.form {
  width: 720px;
  height: 500px;
  margin: 50px auto;
  padding: 45px 65px;
  background: linear-gradient(to right, #e85a0d, #ead811);
}
.form__box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-radius: 40px;
}
.form__left {
  width: 50%;
}
.form__padding {
  width: 210px;
  height: 210px;
  background: #f2f2f2;
  border-radius: 50%;
  margin: 0 auto;
  line-height: 210px;
  position: relative;
}
.form__image {
  max-width: 100%;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.form__right {
  line-height: 26px;
  width: 50%;
}
.form__padding-right {
  padding: 0 25px;
}
.form__title {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}
.form__submit-btn {
  background: #e02807;
  cursor: pointer;
}
.form__submit-btn:hover {
  background: #ff3f70;
}
.form__email {
  position: relative;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 25px;
  height: 35px;
  border-radius: 20px;
  border: none;
  background: #f2f2f2;
  padding: 10px;
  font-size: 14px;
  position: relative;
}
input:after {
  position: absolute;
  content: "a***";
}

a {
  color: #71df88;
  position: relative;
}
a:hover {
  color: #ff3f70;
}
</style>