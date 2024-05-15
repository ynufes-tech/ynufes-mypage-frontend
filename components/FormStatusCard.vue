<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string
    status: 0 | 1 // 0: 未提出, 1: 提出済み
    deadline: string // Date.toISOString()を期待している
  }>(),
  {
    title: '企画団体説明文提出フォーム',
    status: 0,
    deadline: '2024-05-31T23:59:59.817Z'
  }
)

const statusMes = () => {
  switch (props.status) {
    case 1:
      return '提出済'
    default:
      return '未提出'
  }
}
/**
 * 〆切までの日数を計算する
 */
const calcDayLeft = (ISOString: string): number => {
  const date = new Date(ISOString)
  const now = new Date()
  const diff = date.getTime() - now.getTime()
  return Number((diff / (1000 * 60 * 60 * 24)).toFixed(2))
}

const deadlineMes = (ISOString: string) => {
  const day = calcDayLeft(ISOString)
  if (day >= 28) {
    return '1ヶ月後〆切'
  } else if (day >= 21) {
    return '3週間後〆切'
  } else if (day >= 14) {
    return '2週間後〆切'
  } else if (day >= 7) {
    return '1週間後〆切'
  } else if (day >= 1 && day <= 6) {
    return `${Math.floor(day)}日後〆切`
  } else if (day >= 0 && day < 1) {
    return '本日〆切'
  } else {
    return '〆切超過'
  }
}

/**
 * 〆切までの日数に応じたアイコンを返す
 *
 */
const deadlineIconSrc = (ISOString: string): string => {
  const day = calcDayLeft(ISOString)
  if (day >= 28) {
    return '/clock_icon/clock_loader_10.svg'
  } else if (day >= 21) {
    return '/clock_icon/clock_loader_20.svg'
  } else if (day >= 14) {
    return '/clock_icon/clock_loader_40.svg'
  } else if (day >= 7) {
    return '/clock_icon/clock_loader_60.svg'
  } else if (day >= 1 && day <= 6) {
    return '/clock_icon/clock_loader_80.svg'
  } else if (day >= 0 && day < 1) {
    return '/clock_icon/clock_loader_90.svg'
  } else {
    return '/clock_icon/clock_loader_block.svg'
  }
}
</script>
<template>
  <div
    class="form-status-card w-8rem util-color-border-text border-round-xl border-1 border-solid"
    :class="status ? 'util-color-bg-primary' : 'util-color-bg-danger'"
    style="height: 7.5rem"
  >
    <div
      class="ml-2 pl-1 util-color-bg-sub h-full flex flex-column justify-content-between"
      style="
        border-top-right-radius: 0.68rem;
        border-bottom-right-radius: 0.68rem;
      "
    >
      <h2 class="pt-2 font-bold text-sm h-2rem">
        {{ title }}
      </h2>
      <div
        class="status_message font-bold text-sm"
        :class="status ? 'util-color-text-primary' : 'util-color-text-danger'"
      >
        {{ statusMes() }}
      </div>
      <div class="flex align-items-center">
        <img :src="deadlineIconSrc(deadline)" alt="" width="16" height="16" />
        <div class="deadline_field text-xs">
          {{ deadlineMes(deadline) }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
