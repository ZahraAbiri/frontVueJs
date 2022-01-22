<template>

<!--  <!DOCTYPE html>-->
  <!-- Created By CodingLab - www.codinglabweb.com -->
  <html lang="en" dir="ltr">
  <head>
<!--    <meta charset="UTF-8">-->
    <!---<title> Responsive Registration Form | CodingLab </title>--->
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
<!--  <div class="container">-->
<!--    <div class="title">Registration</div>-->
<!--    <div class="content">-->
<!--      <form action="#">-->
<!--        <div class="user-details">-->
<!--          <div class="input-box">-->
<!--            <span class="details">Full Name</span>-->
<!--            <input type="text" placeholder="Enter your name" required>-->
<!--          </div>-->
<!--          <div class="input-box">-->
<!--            <span class="details">Username</span>-->
<!--            <input type="text" placeholder="Enter your username" required>-->
<!--          </div>-->
<!--          <div class="input-box">-->
<!--            <span class="details">Email</span>-->
<!--            <input type="text" placeholder="Enter your email" required>-->
<!--          </div>-->
<!--          <div class="input-box">-->
<!--            <span class="details">Phone Number</span>-->
<!--            <input type="text" placeholder="Enter your number" required>-->
<!--          </div>-->
<!--          <div class="input-box">-->
<!--            <span class="details">Password</span>-->
<!--            <input type="text" placeholder="Enter your password" required>-->
<!--          </div>-->
<!--          <div class="input-box">-->
<!--            <span class="details">Confirm Password</span>-->
<!--            <input type="text" placeholder="Confirm your password" required>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="gender-details">-->
<!--          <input type="radio" name="gender" id="dot-1">-->
<!--          <input type="radio" name="gender" id="dot-2">-->
<!--          <input type="radio" name="gender" id="dot-3">-->
<!--          <span class="gender-title">Gender</span>-->
<!--          <div class="category">-->
<!--            <label for="dot-1">-->
<!--              <span class="dot one"></span>-->
<!--              <span class="gender">Male</span>-->
<!--            </label>-->
<!--            <label for="dot-2">-->
<!--              <span class="dot two"></span>-->
<!--              <span class="gender">Female</span>-->
<!--            </label>-->
<!--            <label for="dot-3">-->
<!--              <span class="dot three"></span>-->
<!--              <span class="gender">Prefer not to say</span>-->
<!--            </label>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="button">-->
<!--          <input type="submit" value="saveCustomer">-->
<!--        </div>-->
<!--      </form>-->
<!--    </div>-->
<!--  </div>-->


  <!---<title> Responsive Registration Form | CodingLab </title>--->


  <div class="container">
    <!--    <link rel="stylesheet" href="style.css">-->
    <!--    <meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <div class="title" dir="rtl"> ثبت مشتری</div>
    <div class="content">
            <form @click="saveCustomer()">

      <!--      <form >-->
      <div class="user-details">
        <div class="input-box">
          <span class="details" dir="rtl">نام</span>
          <input type="text" v-model="customer.firstname" required>
        </div>
        <div class="input-box">
          <span class="details" dir="rtl">نام خانوادگی</span>
          <input type="text" v-model="customer.lastname" required>
        </div>
        <div class="input-box">
          <span class="details" dir="rtl">ایمیل</span>
          <input type="text" v-model="customer.emailAddress" required>
        </div>
        <div class="input-box">
          <span class="details" dir="rtl">اعتبار</span>
          <input type="text" v-model="customer.credit" required>
        </div>
        <div class="input-box">
          <span class="details" dir="rtl">رمز عبور</span>
          <input type="text" v-model="customer.password" required>
        </div>

        <div class="input-box">
          <span class="details" dir="rtl">تاریخ</span>
          <!--            <input type="text" placeholder="Confirm your password" required>-->
          <date-picker v-model="customer.registrationDate" format="jYYYY-jMM-jDD" display-format="jYYYY-jMM-jDD">
          </date-picker>
        </div>
        <div class="input-box">
          <span class="details" dir="rtl">نقش</span>
          <input type="text" v-model="customer.personStatuse" required>
        </div>
      </div>


      <div class="button">
        <button


            @click="saveCustomer()">
          تایید
        </button>
        <input @click="saveCustomer">
      </div>
            </form>
    </div>
  </div>
  </body>
  </html>

</template>

<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import CustomerDataService from "../service/CustomerDataService";

export default {
  name: "CustomerRegisterPage",
  components: {
    datePicker: VuePersianDatetimePicker
  }, data() {
    return {
      customers: [],
      customer: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        password: '',
        personStatuse: '',
        registrationDate: Date(),
        credit: '',

      },
    }
  }, methods: {
    saveCustomer() {
      // console.log(this.customer.firstname + "error");
      var data = {
        firstname: this.customer.firstname,
        lastname: this.customer.lastname,
        emailAddress: this.customer.emailAddress,
        password: this.customer.password,
        personStatuse: this.customer.personStatuse,
        registrationDate: this.customer.registrationDate,
        credit: this.customer.credit
      };
      console.log(data.firstname + "data")
      CustomerDataService.createCustomer(data).then(response => {
        console.log("wwwwww")
        this.customer.id = response.data.id;
        console.log(response.data);
        this.submitted = true;
      })
          .catch(e => {
            console.log(e);
          });
    },
  }, computed: {
    validemailId() {
      if (!/^\w+([[.]-]?\w+)*@\w+([[.]-]?\w+)*(\.\w{2,3})+$/.test(String(this.customer.emailAddress))) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #e8c50e, #e53c08);
}

.container {
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #e8c50e, #e53c08);
}

.content form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}

form .user-details .input-box {
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}

form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #e8c50e;
}

form .gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}

form .category {
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}

form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three {
  background: #e8c50e;
  border-color: #d9d9d9;
}

form input[type="radio"] {
  display: none;
}

form .button {
  height: 45px;
  margin: 35px 0
}

form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #e8c50e, #e53c08);
}

form .button input:hover {
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #e8c50e, #e53c08);
}

@media (max-width: 584px) {
  .container {
    max-width: 100%;
  }

  form .user-details .input-box {
    margin-bottom: 15px;
    width: 100%;
  }

  form .category {
    width: 100%;
  }

  .content form .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }

  .user-details::-webkit-scrollbar {
    width: 5px;
  }
}

@media (max-width: 459px) {
  .container .content .category {
    flex-direction: column;
  }
}

</style>