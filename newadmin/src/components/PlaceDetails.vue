<template>
  <div class="box" v-if="!place">
    <h4 class="subtitle is-4 has-text-danger">
      {{ $t("place.emptyMessage") }}
    </h4>
  </div>

  <div class="box" v-else>
    <div class="columns">
      <div class="column">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <div class="content">
              <p>{{ $t("place.labels.link") }}</p>
              <h4>{{ place.id }}</h4>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="content">
              <p>{{ $t("place.labels.name") }}</p>
              <h4>{{ place.name }}</h4>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="content">
              <p>{{ $t("place.labels.tables") }}</p>
              <h4>{{ place.tables }}</h4>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="content">
              <p>{{ $t("place.labels.address") }}</p>
              <h4>{{ place.address }}</h4>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="content">
              <p>{{ $t("place.labels.city") }}</p>
              <h4>{{ place.city }}</h4>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="content">
              <p>{{ $t("place.labels.country") }}</p>
              <h4>{{ place.country }}</h4>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="content">
              <p>{{ $t("place.labels.phone") }}</p>
              <h4>{{ place.phone }}</h4>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="content">
              <p>{{ $t("place.labels.email") }}</p>
              <h4>{{ place.email }}</h4>
            </div>
          </div>

          <div class="column is-full">
            <div class="content">
              <p>{{ $t("place.labels.description") }}</p>
              <h4>{{ place.description }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-narrow">
        <div class="content">
          <h5 class="">{{ $t("place.labels.uploadBg") }}</h5>

          <div class="block">
            <figure class="image is-square mx-0">
              <img :src="place.backgroundImage" />
            </figure>
          </div>

          <div class="block">
            <div class="file">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume"
                  @click="resetFileImage('backgroundImage')"
                  @change="uploadFileImage('backgroundImage', $event)"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">
                    {{ $t("general.btnUpload") }}
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="content">
          <h5 class="">{{ $t("place.labels.uploadLogo") }}</h5>

          <div class="block">
            <figure class="image image is-5by3 mx-0">
              <img :src="place.logoImage" />
            </figure>
          </div>

          <div class="block">
            <div class="file">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume"
                  @click="resetFileImage('logoImage')"
                  @change="uploadFileImage('logoImage', $event)"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">
                    {{ $t("general.btnUpload") }}
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceDetails",
  props: ["place"],
};
</script>

<style>
</style>