---
layout: base.html
title: Raw Notes from Obsidian
description: A simple site to check how notes are being published from Obsidian.
date: 2023-07-17
pagination:
    data: collections.posts
    size: 5
    alias: posts
---

All notes being published here from Obsidian using [Eleventy](https://11ty.dev/).

<div>
{% for post in posts %}
<article>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
</article>
{% endfor %}

<!-- Pagination links -->
{% if pagination.href.next %}
    <a class="contrast" role="button" href="{{ pagination.href.next }}">→</a>
{% endif %}
{% if pagination.href.previous %}
    <a class="contrast" role="button" href="{{ pagination.href.previous }}">←</a>
{% endif %}
</div>
