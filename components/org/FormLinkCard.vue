<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "未設定"
  },
  status: {
    type: Number,
    default: 0
  },
  deadline: {
    type: String,
    default: "2023年1月11日11:11まで"
  }
})
const status_image = () => {
  switch (props.status) {
    case 1:
    case 2:
      return "/icon_check.webp"
    case 3:
      return "/icon_waiting.webp"
    case 4:
      return "/icon_caution.webp"
    case 5:
    default:
      return "/icon_warning.webp"
  }
}
const status_mes = () => {
  switch (props.status) {
    case 1:
      return "受理済み"
    case 2:
      return "提出済み"
    case 3:
      return "未提出"
    case 4:
      return "期限間近"
    case 5:
    default:
      return "締切超過"
  }
}

const status_color = () => {
  switch (props.status) {
    case 1:
      return "#b3eccf"
    case 2:
      return "#4CAF50"
    case 3:
      return "#1edfe5"
    case 4:
      return "#f1bc35"
    case 5:
    default:
      return "#e73b14"
  }
}
</script>
<template>
  <div class="form-card" :style="{'--statusColor': status_color()}">
    <h2><span>{{ props.title }}</span></h2>
    <hr/>
    <div class="status_row"><img alt="status_icon" class="status_icon" :src="status_image()"/>
      <div class="status_message">{{ status_mes() }}</div>
    </div>
    <div class="deadline_field">{{ props.deadline }}</div>
  </div>
</template>

<script>
export default {
  name: "form_button"
}
</script>

<style scoped lang="scss">
.form-card::before {
  background: var(--statusColor);
  content: "";
  position: absolute;
  width: 20px;
  display: flex;
  left: 0;
  height: 100%;
}

.form-card {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  font-weight: bold;
  position: relative;
  border-radius: 20px;
  padding-left: 20px;
  width: 250px;
  height: 250px;
  aspect-ratio: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  > hr {
    margin: 0 10px;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 25px;
    padding: 10px;
    height: 50%;
  }

  .status_row {
    height: 90px;
    display: flex;
    flex-direction: row;

    .status_icon {
      width: 50px;
      margin: 20px;
      aspect-ratio: 1;
    }

    .status_message {
      margin: auto 0;
      font-size: 25px;
      text-align: center;
      width: 120px;
    }
  }

  .deadline_field {
    margin: auto 0;
    font-size: 15px;
    text-align: center;
    width: 220px;
  }

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
}

</style>