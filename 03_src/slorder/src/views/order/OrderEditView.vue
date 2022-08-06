<template>
  <v-container>
    <StatusInfo 
      :value="project.status" 
      :do-receive="doReceive"
      :do-delivery="doDelivery"
      :do-acceptance="doAcceptance"
      :do-peymented="doPeymented"
      :do-lost-order="doLostOrder"
      :do-receive-cancel="doReceiveCancel"
      :do-delivery-cancel="doDeliveryCancel"
      :do-acceptance-cancel="doAcceptanceCancel"
      :do-peymented-cancel="doPeymentedCancel"
      :do-lost-order-cancel="doLostOrderCancel"
      :editable=editable />

    <!-- basicInfo -->
    <BasicInfo 
      :basicInfo="project.basic"
      :editable=editable
      v-on:update="dataUpdate" />

    <!-- peyment -->
    <v-container class="primary--text mb-8">
      <v-row>{{$t('common.peyment')}}</v-row>
      <v-row>
        <v-col class="header" cols="2" />
        <v-col class="header" cols="5">{{$t('common.estimate_data')}}</v-col>
        <v-col class="header" cols="5">{{$t('common.actual_data')}}</v-col>
      </v-row>
      <v-row>
        <v-col class="side_header" cols="2" >{{$t('common.oparating_work_by_time')}}</v-col>
        <v-col class="column-left" cols="5">
          <NumberField 
            v-model="project.payment.estimate.oparatingWorkByTime"
            :label="$t('common.oparating_work_by_time')"
            :unit="$t('common.working_man_hours_unit')"
            :float=true
            :editable=editable />
        </v-col>
        <v-col class="column-left" cols="5">
          <NumberField 
            v-model="project.payment.actual.oparatingWorkByTime"
            :label="$t('common.oparating_work_by_time')"
            :unit="$t('common.working_man_hours_unit')"
            :float=true
            :editable=editable />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="side_header" cols="2" >{{$t('common.oparating_cost')}}</v-col>
        <v-col class="column-left" cols="5">
          <NumberField 
            v-model="project.payment.estimate.oparatingCost"
            :label="$t('common.oparating_cost')"
            :unit="$t('common.currency')"
            :editable=editable />
        </v-col>
        <v-col class="column-left" cols="5">
          <NumberField 
            v-model="project.payment.actual.oparatingCost"
            :label="$t('common.oparating_cost')"
            :unit="$t('common.currency')"
            :editable=editable />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="side_header" cols="2" >{{$t('common.other_cost')}}</v-col>
        <v-col class="column-left" cols="5">
          <NumberField 
            v-model="project.payment.estimate.otherCost"
            :label="$t('common.other_cost')"
            :unit="$t('common.currency')"
            :editable=editable />
        </v-col>
        <v-col class="column-left" cols="5">
          <NumberField 
            v-model="project.payment.actual.otherCost"
            :label="$t('common.other_cost')"
            :unit="$t('common.currency')"
            :editable=editable />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="side_header" cols="2" >{{$t('common.proceeds')}}</v-col>
        <v-col class="column-left" cols="5">
          <NumberField 
            v-model="project.payment.estimate.proceeds"
            :label="$t('common.proceeds')"
            :unit="$t('common.currency')"
            :editable=editable />
        </v-col>
        <v-col class="column-left" cols="5">
          <NumberField 
            v-model="project.payment.actual.proceeds"
            :label="$t('common.proceeds')"
            :unit="$t('common.currency')"
            :editable=editable />
        </v-col>
      </v-row>
    </v-container>

    <!-- assign_menber -->
    <v-container class="primary--text mb-8">
      <v-row>
        {{$t('common.assign_menber')}}
        <v-btn class="primary secondary--text d-block ml-auto mb-2">
          {{$t('common.oparating_register')}}
        </v-btn>
      </v-row>
      <v-row>
        <v-col class="header" cols="4" >{{$t('common.client_name')}}</v-col>
        <v-col class="header" cols="4">{{$t('common.unit_cost')}}</v-col>
        <v-col class="header" cols="4">{{$t('common.oparating_time')}}</v-col>
      </v-row>
    </v-container>

    <!-- onther_cost -->
    <v-container class="primary--text mb-8">
      <v-row>{{$t('common.other_cost')}}</v-row>
      <v-row>
        <v-col class="header" cols="3" >{{$t('common.product_name')}}</v-col>
        <v-col class="header" cols="3">{{$t('common.kind')}}</v-col>
        <v-col class="header" cols="3">{{$t('common.buy_date')}}</v-col>
        <v-col class="header" cols="3">{{$t('common.price')}}</v-col>
      </v-row>
      <v-row v-for="cost of project.otherCost" :key="cost.index">
        <v-col class="column" cols="3" >
          <TextField 
            v-model="cost.name"
            :label="$t('common.product_name')"
            :max-value=16
            :editable=editable />
        </v-col>
        <v-col class="column-center" cols="3">
          <SelectField
            v-model="cost.kind"
            :label="$t('common.kind')"
            :items="otherCostKindList"
            item-value="id"
            itemText="name"
            :editable=editable />
        </v-col>
        <v-col class="column-center" cols="3">
          <DateField 
            v-model="cost.buy_date"
            :label="$t('common.buy_date')"
            :editable=editable />
        </v-col>
        <v-col class="column-right" cols="3">
          <NumberField 
            v-model="cost.price"
            :label="$t('common.price')"
            :unit="$t('common.currency')"
            :editable=editable />
        </v-col>
      </v-row>
    </v-container>

    <!-- edit_button -->
    <v-container class="primary--text mb-8">
      <v-btn 
        class="primary secondary--text d-block mx-auto"
        @click="doEdit">{{$t('common.edit')}}</v-btn>
    </v-container>
      
    <!-- update_history -->
    <v-container class="primary--text">
      <v-row>{{$t('common.update_history')}}</v-row>
      <v-row>
        <v-col class="header" cols="4" >{{$t('common.update_user')}}</v-col>
        <v-col class="header" cols="4">{{$t('common.update_date')}}</v-col>
        <v-col class="header" cols="4">{{$t('common.kind')}}</v-col>
      </v-row>
      <v-row v-for="history of project.history" :key="history.index">
        <v-col class="column" cols="4" >{{history.name}}</v-col>
        <v-col class="column-center" cols="4">{{history.date}}</v-col>
        <v-col class="column-center" cols="4">
          {{getProjectHistoryName(history.kind)}}
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
  import TextField from '@/components/Interface/TextField.vue'
  import DateField from '@/components/Interface/DateField.vue'
import SelectField from '@/components/Interface/SelectField.vue'
import NumberField from '@/components/Interface/NumberField.vue'
import StatusInfo from '@/components/project/StatusInfo.vue'
import BasicInfo from '@/components/project/BasicInfo.vue'
  export default {
    name: 'OrderEditView',
    components: {
    TextField,
    DateField,
    SelectField,
    NumberField,
    StatusInfo,
    BasicInfo
},
    data() {
      return {
        editable: false,
        project: {
          status: 1,
          basic: {
            no: 'P-20220301-0002',
            name: 'ペット行動管理システム',
            client: 2,
            startDate: '2022-03-01',
            limitDate: '2022-04-30',
            receiveAmount: 20000000
          },
          payment: {
            estimate: {
              oparatingWorkByTime: 10.00,
              oparatingCost: 8640000,
              otherCost: 5400000,
              proceeds: 5496000
            },
            actual: {
              oparatingWorkByTime: 3.75,
              oparatingCost: 1435735,
              otherCost: 5400000,
              proceeds: 13164265
            }
          },
          member: {},
          otherCost: [
            {
              name: 'サーバー01',
              kind: 1,
              buy_date: '2022-03-01',
              price: 5000000
            },
            {
              name: '武田信玄',
              kind: 2,
              buy_date: '2022-03-04',
              price: 400000
            }
          ],
          history: [
            {
              name: '受注 太郎',
              date: '2022-02-01',
              kind: 0
            },
            {
              name: '受注 太郎',
              date: '2022-02-20',
              kind: 1
            }
          ]
        },
        clientList: [
          {id: 1, name: 'ポメラニアン佐藤'},
          {id: 2, name: '三日月農協組合'},
          {id: 3, name: '山田商店'},
          {id: 4, name: '田中文具店'},
          {id: 5, name: 'スズキ薬局'},
          {id: 6, name: '三日月市'}
        ],
        otherCostKindList: [
          {id: 1, name: '機器購入費'},
          {id: 2, name: '外注費'}
        ]
      }
    },
    methods: {
      doEdit: function() {
        this.editable = true;
      },
      getProjectHistoryName: function(kindId) {
        for (let hist of this.$projectHistoryKinds) {
          if (kindId === hist.id) {
            return hist.label;
          }
        }
        return '';
      },
      doReceive: function() {

      },
      doDelivery: function() {

      },
      doAcceptance: function() {

      },
      doPeymented: function() {

      },
      doLostOrder: function() {

      },
      doReceiveCancel: function() {

      },
      doDeliveryCancel: function() {

      },
      doAcceptanceCancel: function() {

      },
      doPeymentedCancel: function() {

      },
      doLostOrderCancel: function() {

      },
      dataUpdate: function(array, key, value) {
        if (array === undefined || key === undefined || value === undefined) {
          return;
        }
        if (array[key] !== undefined) {
          array[key] = value;
        }
      }
    },
    computed: {
      status : function() {
        for (let state of this.$projectStatus) {
          if (this.project.status === state.id) {
            return state.label;
          }
        }
        return '';
      }
    }
}
</script>
<style scoped>
.header, .side_header, .header-center {
  border-collapse: collapse;
  border: 1px solid #757575;
  background-color: var(--v-primary-base);
  color: var(--v-secondary-base);
}
.header {
  text-align: center;
}
.header-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.column, .column-right, .column-left, .column-center, .column-flex-center {
  border-collapse: collapse;
  border: 1px solid #757575;
}
.column-right {
  text-align: right;
}
.column-left {
  text-align: right;
}
.column-center {
  text-align: center;
}
.column-flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>