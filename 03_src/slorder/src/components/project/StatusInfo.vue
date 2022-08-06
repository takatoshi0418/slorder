<template>
  <v-container 
    v-if="!editable"
    class="primary--text mb-8">
    <v-row>
      <v-col cols="1" class="header-center">{{$t('common.status')}}</v-col>
      <v-col cols="1" class="column-flex-center">{{status}}</v-col>
      <v-col cols="10">
        <span v-if="isVisibleReceive">
          <v-btn @click="doReceive" class="primary secondary--text mx-2">{{$t('common.receive')}}</v-btn>
        </span>
        <span v-if="isVisibleDelivery">
          <v-btn @click="doDelivery" class="primary secondary--text mx-2">{{$t('common.delivery')}}</v-btn>
        </span>
        <span v-if="isVisibleAcceptance">
          <v-btn @click="doAcceptance" class="primary secondary--text mx-2">{{$t('common.acceptance')}}</v-btn>
        </span>
        <span v-if="isVisiblePeymented">
          <v-btn @click="doPeymented" class="primary secondary--text mx-2">{{$t('common.peymented')}}</v-btn>
        </span>
        <span v-if="isVisibleLostOrder">
          <v-btn @click="doLostOrder" class="cancel secondary--text mx-2">{{$t('common.lost_order')}}</v-btn>
        </span>
        <span v-if="isVisibleReceiveCancel">
          <v-btn @click="doReceiveCancel" class="cancel secondary--text mx-2">{{$t('common.receive_cancel')}}</v-btn>
        </span>
        <span v-if="isVisibleDeliveryCancel">
          <v-btn @click="doDeliveryCancel" class="cancel secondary--text mx-2">{{$t('common.delivery_cancel')}}</v-btn>
        </span>
        <span v-if="isVisibleAcceptanceCancel">
          <v-btn @click="doAcceptanceCancel" class="cancel secondary--text mx-2">{{$t('common.acceptance_cancel')}}</v-btn>
        </span>
        <span v-if="isVisiblePeymentedCancel">
          <v-btn @click="doPeymentedCancel" class="cancel secondary--text mx-2">{{$t('common.peymented_cancel')}}</v-btn>
        </span>
        <span v-if="isVisibleLostOrderCancel">
          <v-btn @click="doLostOrderCancel" class="cancel secondary--text mx-2">{{$t('common.lost_order_cancel')}}</v-btn>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: 'statusInfo',
    props: {
      value: {
        required: true
      },
      doReceive: {
        type: Function,
        required: true
      },
      doDelivery: {
        type: Function,
        required: true
      },
      doAcceptance: {
        type: Function,
        required: true
      },
      doPeymented: {
        type: Function,
        required: true
      },
      doLostOrder: {
        type: Function,
        required: true
      },
      doReceiveCancel: {
        type: Function,
        required: true
      },
      doDeliveryCancel: {
        type: Function,
        required: true
      },
      doAcceptanceCancel: {
        type: Function,
        required: true
      },
      doPeymentedCancel: {
        type: Function,
        required: true
      },
      doLostOrderCancel: {
        type: Function,
        required: true
      },
      editable: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      status : function() {
        for (let state of this.$projectStatus) {
          if (this.value === state.id) {
            return state.label;
          }
        }
        return '';
      },
      isVisibleReceive: function() {
        return this.$getProjectStatus('estimation').id === this.value
      },
      isVisibleDelivery: function() {
        return this.$getProjectStatus('received').id === this.value
      },
      isVisibleAcceptance: function() {
        return this.$getProjectStatus('delivered').id === this.value
      },
      isVisiblePeymented: function() {
        return this.$getProjectStatus('acceptanced').id === this.value
      },
      isVisibleLostOrder: function() {
        return this.$getProjectStatus('estimation').id === this.value
          || this.$getProjectStatus('received').id === this.value
      },
      isVisibleReceiveCancel: function() {
        return this.$getProjectStatus('received').id === this.value
      },
      isVisibleDeliveryCancel: function() {
        return this.$getProjectStatus('delivered').id === this.value
      },
      isVisibleAcceptanceCancel: function() {
        return this.$getProjectStatus('acceptanced').id === this.value
      },
      isVisiblePeymentedCancel: function() {
        return this.$getProjectStatus('paymented').id === this.value
      },
      isVisibleLostOrderCancel: function() {
        return this.$getProjectStatus('lostOrder').id === this.value
      }
    }
  }
</script>
<style>
@import '@/assets/projectEdit.css';
</style>