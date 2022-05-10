<template>
  <div class="container" style="background-color:">
    <div class="container-fluid p-0 mb-5">
        <img class="w-100" src="../assets/banner.jpg" style="object-fit: contain"
        />
    </div>
    <form class="w-75" style="margin-left: 10rem">
        <h1 class="text-start" style="font-size: 2rem">ข้อมูลผู้ลงทะเบียนรับวัคซีน</h1>
        <hr class="bg-danger border-5 border-top border-danger mt-2">

        <div class="row">
            <div class="col-6 text-start">
                <label for="title" class="form-label">คำนำหน้า*</label>
            </div>
            <div class="col-6">
                <div class="dropdown w-100">
                    <button class="btn dropdown-toggle w-100 text-end" type="button" id="title" data-bs-toggle="dropdown" aria-expanded="false" style="border-color: #C4C4C4">
                        กรุณาเลือก
                    </button>
                    <ul class="dropdown-menu w-100" aria-labelledby="title">
                        <li><a class="dropdown-item" href="#">นาย</a></li>
                        <li><a class="dropdown-item" href="#">นาง</a></li>
                        <li><a class="dropdown-item" href="#">นางสาว</a></li>
                        <li><a class="dropdown-item" href="#">ด.ช.</a></li>
                        <li><a class="dropdown-item" href="#">ด.ญ.</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6 text-start">
                <label for="name" class="form-label">ชื่อ*</label>
            </div>
            <div class="col-6">
                <input type="text" class="form-control" id="name">
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6 text-start">
                <label for="surname" class="form-label">ชื่อ*</label>
            </div>
            <div class="col-6">
                <input type="text" class="form-control" id="surname">
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6 text-start">
                <label for="exampleFormControlInput1" class="form-label">คำนำหน้า*</label>
            </div>
            <div class="col-6">
                <div class="dropdown w-100">
                    <button class="btn dropdown-toggle w-100 text-end" type="button" id="gender" data-bs-toggle="dropdown" aria-expanded="false" style="border-color: #C4C4C4">
                        กรุณาเลือก
                    </button>
                    <ul class="dropdown-menu w-100" aria-labelledby="gender">
                        <li><a class="dropdown-item" href="#">ชาย</a></li>
                        <li><a class="dropdown-item" href="#">หญิง</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6 text-start">
                <label for="birthdate" class="form-label">วัน-เดือน-ปี เกิด*</label>
            </div>
            <div class="col-6">
                <input type="date" class="form-control fw-light text-end" id="birthdate"/>
                <p class="text-danger text-start">สำคัญ! กรุณาทวนวันเดือนปีเกิดให้ถูกต้อง</p>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6 text-start">
                <label for="cardid" class="form-label">หมายเลขบัตรประจำตัว*</label>
            </div>
            <div class="col-6">
                <input type="text" class="form-control" id="cardid">
            </div>
        </div>

        <h1 class="text-start mt-5" style="font-size: 2rem">ข้อมูลการติดต่อ</h1>
        <hr class="bg-danger border-5 border-top border-danger mt-2">

        <div class="row mt-2">
            <div class="col-6 text-start">
                <label for="phone" class="form-label">หมายเลขโทรศัพท์ของผู้รับวัคซีน*</label>
            </div>
            <div class="col-6">
                <input type="text" class="form-control" id="phone">
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6 text-start">
                <label for="lineid" class="form-label">Line ID</label>
            </div>
            <div class="col-6">
                <input type="text" class="form-control" id="lineid">
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6 text-start">
                <label for="email" class="form-label">อีเมล</label>
            </div>
            <div class="col-6">
                <input type="text" class="form-control" id="email">
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6 text-start">
                <label for="address" class="form-label">ที่อยู่ที่ติดต่อได้</label>
            </div>
            <div class="col-6">
                <textarea class="form-control form-control" rows="3" aria-label="address" id="address"></textarea>
            </div>
        </div>

        <h1 class="text-start mt-5" style="font-size: 2rem">เลือกสถานที่ และเข็มที่ต้องการฉีด <span style="font-size: 1.3rem">(ชนิดวัคซีนที่ได้รับ ขึ้นอยู่กับกรมการแพทย์จัดสรรในแต่ละวัน)</span></h1>
        <hr class="bg-danger border-5 border-top border-danger mt-2">

        <div class="row">
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    MBK-เอ็มบีเค เซ็นเตอร์ (เข็ม 3)
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    MBK-เอ็มบีเค เซ็นเตอร์ (เข็ม 4)
                </label>
                </div>
            </div>
        </div>


        <h1 class="text-start mt-5" style="font-size: 2rem">วัน-เวลารับวัคซีน</h1>
        <hr class="bg-danger border-5 border-top border-danger mt-2">

        <div class="row my-2">
            <div class="col-6 text-start">
                <input type="date" class="form-control fw-light text-end" id="birthdate"/>
            </div>
            <div class="col-6">
                <div class="dropdown w-100">
                    <button class="btn dropdown-toggle w-100 text-end" type="button" id="gender" data-bs-toggle="dropdown" aria-expanded="false" style="border-color: #C4C4C4">
                        -- กรุณาเลือกเวลา --
                    </button>
                    <ul class="dropdown-menu w-100" aria-labelledby="gender">
                        <li><a class="dropdown-item" href="#">09.00-10.00</a></li>
                        <li><a class="dropdown-item" href="#">10.00-11.00</a></li>
                        <li><a class="dropdown-item" href="#">11.00-12.00</a></li>
                        <li><a class="dropdown-item" href="#">12.00-13.00</a></li>
                        <li><a class="dropdown-item" href="#">13.00-14.00</a></li>
                        <li><a class="dropdown-item" href="#">14.00-15.00</a></li>
                        <li><a class="dropdown-item" href="#">15.00-16.00</a></li>
                        <li><a class="dropdown-item" href="#">16.00-17.00</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <router-link to="/reserve-vaccine" type="button" class="btn btn-danger my-5" style="width: 300px; font-size: 1.5rem">Next</router-link>
    </form>
  </div>
</template>

<script>
import {} from 'bootstrap'
import axios from "../plugins/axios";
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
    axios
      .get("/rooms")
      .then((response) => {
        console.log(response.data);
        this.rooms = response.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
};
</script>