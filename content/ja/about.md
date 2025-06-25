---
title: "概要"
---

{{ $profileName := .Site.Params.profile_image | default "profile.jpg" }}
{{ $profile := printf "static/img/%s" $profileName }}
{{ if fileExists $profile }}
<div class="profile-wrapper">
  <img src="{{ printf "img/%s" $profileName | relURL }}" alt="プロフィール画像" class="profile-photo">
</div>
{{ end }}

## 機能

<div class="features-list">

### タスク管理
<div class="feature-item">
ガントビューでタスクを簡単に管理できます。
</div>

### 優先度
<div class="feature-item">
タスクの優先度と状態を一目で把握できます。
</div>

### 進捗
<div class="feature-item">
スケジュール通りに進捗を確認できます。
</div>

</div>

{{< social-icons >}}
