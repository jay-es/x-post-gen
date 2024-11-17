<script setup lang="ts">
import { Info } from 'lucide-vue-next'
</script>

<template>
  <h3 class="mb-2 mt-6 flex items-center gap-x-1 text-sm font-medium">
    <Info class="size-4" /> How To Use
  </h3>
  <ol class="list-decimal space-y-2 pl-4 text-[0.8rem]">
    <li>
      テンプレートを入力。変数部分は
      <code v-text="'{{ }}'" />
      で囲む（カッコの内側のスペースはあってもなくてもよい）。
    </li>
    <li>
      データ入力。JSON 形式で、オブジェクトの配列になるように。<br />
      各オブジェクトはテンプレートの変数をプロパティ名として持っている必要あり。
    </li>
    <li>
      正しくパースできた場合はポスト内容が出力される。<br />
      プロパティがない場合は下にエラーが表示される（処理は続行）。<br />
      右下には文字数カウントがあり、文字数を超えるとエラー色になる。<br />
      ダブルクリックすると全選択できる。
    </li>
  </ol>
</template>
