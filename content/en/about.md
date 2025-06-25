---
title: "About"
---

{{ $profileName := .Site.Params.profile_image | default "profile.jpg" }}
{{ $profile := printf "static/img/%s" $profileName }}
{{ if fileExists $profile }}
<div class="profile-wrapper">
  <img src="{{ printf "img/%s" $profileName | relURL }}" alt="Profile Photo" class="profile-photo">
</div>
{{ end }}

## Features

<div class="features-list">

### Task Management
<div class="feature-item">
Keep track of project tasks with an easy Gantt view.
</div>

### Priorities
<div class="feature-item">
Visualize task priority and status at a glance.
</div>

### Progress
<div class="feature-item">
Monitor progress over time to stay on schedule.
</div>

</div>

{{< social-icons >}}
