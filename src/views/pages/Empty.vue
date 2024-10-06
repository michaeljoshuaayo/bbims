<script setup>
import Fluid from 'primevue/fluid';
import { ref } from 'vue';

const requestingFacilityValue = ref('');
const addressValue = ref('');
const pathologistValue = ref('');
const facilityTransacNumValue = ref('');

const inventoryInputs = {
    uncrossmatchedWholeBlood: {
        aPos: ref(''),
        aNeg: ref(''),
        bPos: ref(''),
        bNeg: ref(''),
        oPos: ref(''),
        oNeg: ref(''),
        abPos: ref(''),
        abNeg: ref('')
    },
    uncrossmatchedPackedRBC: {
        aPos: ref(''),
        aNeg: ref(''),
        bPos: ref(''),
        bNeg: ref(''),
        oPos: ref(''),
        oNeg: ref(''),
        abPos: ref(''),
        abNeg: ref('')
    },
    crossmatchedWholeBlood: {
        aPos: ref(''),
        aNeg: ref(''),
        bPos: ref(''),
        bNeg: ref(''),
        oPos: ref(''),
        oNeg: ref(''),
        abPos: ref(''),
        abNeg: ref('')
    },
    crossmatchedPackedRBC: {
        aPos: ref(''),
        aNeg: ref(''),
        bPos: ref(''),
        bNeg: ref(''),
        oPos: ref(''),
        oNeg: ref(''),
        abPos: ref(''),
        abNeg: ref('')
    }
};
</script>

<template>
    <div class="font-bold text-center text-xl mb-6">Blood Request Inquisition Slip Form (RIS)</div>
    <div class="card">
        <span class="font-semibold mb-6 block">Basic Details</span>
        <Fluid>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <FloatLabel>
                        <InputText id="requestingFacility" type="text" v-model="requestingFacilityValue" />
                        <label for="requestingFacility">Requesting Facility / Hospital</label>
                    </FloatLabel>
                </div>
                <div>
                    <FloatLabel>
                        <InputText id="address" type="text" v-model="addressValue" />
                        <label for="address">Address</label>
                    </FloatLabel>
                </div>
                <div class="mt-3">
                    <FloatLabel>
                        <InputText class="" id="pathologist" type="text" v-model="pathologistValue" />
                        <label for="pathologist">Pathologist</label>
                    </FloatLabel>
                </div>
                <div class="mt-3">
                    <FloatLabel>
                        <InputText id="facilityTransacNum" type="number" v-model="facilityTransacNumValue" />
                        <label for="facilityTransacNum">Facility / Hospital Transaction Number #</label>
                    </FloatLabel>
                </div>
            </div>
        </Fluid>
    </div>
    <span class="font-bold mb-6 block">Blood Inventory Report (In-Stock)</span>
    <div class="grid grid-cols-2 gap-4">
        <div class="card" style="height: 375px">
            <span class="font-semibold mb-6 block text-center">Uncrossmatched (Quantity)</span>
            <hr class="mb-3" />
            <Fluid>
                <div class="grid grid-cols-2 gap-4">
                    <span class="font text-center text-muted-color">Whole Blood</span>
                    <span class="font text-center text-muted-color">Packed RBC</span>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <FloatLabel>
                                <InputText id="" type="number" v-model="inventoryInputs.uncrossmatchedWholeBlood.aPos"></InputText>
                                <label for="">A+</label>
                            </FloatLabel>
                        </div>
                        <div>
                            <FloatLabel>
                                <InputText id="" type="number" v-model="inventoryInputs.uncrossmatchedWholeBlood.aNeg"></InputText>
                                <label for="">A-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number" v-model="inventoryInputs.uncrossmatchedWholeBlood.bPos"></InputText>
                                <label for="">B+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">B-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">O+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">O-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">AB+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">AB-</label>
                            </FloatLabel>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">A+</label>
                            </FloatLabel>
                        </div>
                        <div>
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">A-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">B+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">B-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">O+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">O-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">AB+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">AB-</label>
                            </FloatLabel>
                        </div>
                    </div>
                </div>
            </Fluid>
        </div>
        <div class="card" style="height: 375px">
            <span class="font-semibold mb-6 block text-center">Crossmatched (Quantity)</span>
            <hr class="mb-3" />
            <Fluid>
                <div class="grid grid-cols-2 gap-4">
                    <span class="font text-center text-muted-color">Whole Blood</span>
                    <span class="font text-center text-muted-color">Packed RBC</span>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">A+</label>
                            </FloatLabel>
                        </div>
                        <div>
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">A-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">B+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">B-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">O+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">O-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">AB+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">AB-</label>
                            </FloatLabel>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">A+</label>
                            </FloatLabel>
                        </div>
                        <div>
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">A-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">B+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">B-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">O+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">O-</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">AB+</label>
                            </FloatLabel>
                        </div>
                        <div class="mt-3">
                            <FloatLabel>
                                <InputText id="" type="number"></InputText>
                                <label for="">AB-</label>
                            </FloatLabel>
                        </div>
                    </div>
                </div>
            </Fluid>
        </div>
    </div>
</template>
