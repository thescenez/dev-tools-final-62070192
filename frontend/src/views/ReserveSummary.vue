<template>
  <div class="container" style="background-color:">
    <div class="container-fluid p-0 mb-5">
        <img class="w-100" src="../assets/banner.jpg" style="object-fit: contain"
        />
    </div>
        <div class="row">
            <h1 class="text-danger" style="font-size: 2rem; padding-top: 100px">ตรวจสอบข้อมูล</h1>
            <h1 class="pt-2 mb-5" style="font-size: 1.5rem;">กรุณาตรวจสอบความถุกต้องของข้อมูล และกดปุ่มยืนยันด้านล่าง</h1>

            <div class="col-3 mt-5 text-start" style="margin-left: 25rem">
                <h1 class="pt-2" style="font-size: 1.3rem;">ชื่อ - นามสกุล</h1>
                <h1 class="pt-4" style="font-size: 1.3rem;">หมายเลขโทรศัพท์</h1>
                <h1 class="pt-4" style="font-size: 1.3rem;">หมายเลขบัตรประจำตัว</h1>
                <h1 class="pt-4" style="font-size: 1.3rem;">สถานที่ และเข็มที่ต้องการฉีด</h1>
                <h1 class="pt-4" style="font-size: 1.3rem;">วัน - เวลา</h1>
            </div>
            <div class="col-3 mt-5 text-start">
                <h1 class="pt-2" style="font-size: 1.3rem;">สลิลญา ติ้มขลิบ</h1>
                <h1 class="pt-4" style="font-size: 1.3rem;">0613871234</h1>
                <h1 class="pt-4" style="font-size: 1.3rem;">1749900753508</h1>
                <h1 class="pt-4" style="font-size: 1.3rem;">MBK-เอ็มบีเค เซ็นเตอร์: เข็ม 4</h1>
                <h1 class="pt-4" style="font-size: 1.3rem;">31/5/2565 14.00 - 15.00 น.</h1>
            </div>
            
        </div>
        <div class="row" style="margin-left: 20rem; padding-top: 5rem; padding-bottom: 5rem;">
            <router-link to="/reserve-vaccine" type="button" class="btn btn-secondary my-5" style="width: 300px; font-size: 1.5rem">Cancel</router-link>
            <router-link to="/" type="button" class="btn btn-danger my-5 ms-3" style="width: 300px; font-size: 1.5rem">Confirm</router-link>
        </div>
  </div>
</template>

<script>
import {} from 'bootstrap'
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  created() {

  }
};
</script>