<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string
    status: number
    deadline: string
  }>(),
  {
    title: '未設定',
    status: 0,
    deadline: '2023年1月11日11:11まで'
  }
)
const statusImage = () => {
  switch (props.status) {
    case 1:
    case 2:
      return '/icon_check.webp'
    case 3:
      return '/icon_waiting.webp'
    case 4:
      return '/icon_caution.webp'
    case 5:
    default:
      return '/icon_warning.webp'
  }
}
const statusMes = () => {
  switch (props.status) {
    case 1:
      return '受理済み'
    case 2:
      return '提出済み'
    case 3:
      return '未提出'
    case 4:
      return '期限間近'
    case 5:
    default:
      return '締切超過'
  }
}

const statusColor = () => {
  switch (props.status) {
    case 1:
      return '#b3eccf'
    case 2:
      return '#4CAF50'
    case 3:
      return '#1edfe5'
    case 4:
      return '#f1bc35'
    case 5:
    default:
      return '#e73b14'
  }
}
</script>
<template>
  <div class="form-card" :style="{ '--statusColor': statusColor() }">
    <h2>
      <span>{{ title }}</span>
    </h2>
    <hr />
    <div class="status_row">
      <img alt="status_icon" class="status_icon" :src="statusImage()" />
      <div class="status_message">{{ statusMes() }}</div>
    </div>
    <div class="deadline_field">{{ deadline }}</div>
  </div>
</template>
<style scoped lang="scss">
.form-card::before {
  background: var(--statusColor);
  content: '';
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
  width: 200px;
  height: 200px;
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
    font-size: 20px;
    padding: 8px;
    height: 50%;
  }

  .status_row {
    height: 70px;
    display: flex;
    flex-direction: row;
    width: 180px;

    .status_icon {
      width: 50px;
      margin: 10px;
      aspect-ratio: 1;
    }

    .status_message {
      margin: auto 0;
      font-size: 20px;
      width: 100px;
      text-align: center;
    }
  }

  .deadline_field {
    margin: auto 0;
    font-size: 12px;
    text-align: center;
  }

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    scale: 0.99;
  }
}
</style>
