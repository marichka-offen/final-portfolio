<template>
  <div>
    <h2>Gallery</h2>
    <div class="row">
      <div class="column">
        <img src="../assets/img/illustrations/me.svg" style="width:100%" />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
      </div>
      <div class="column">
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />

        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
      </div>
      <div class="column">
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
        <img
          src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          style="width:100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 33.33333%;
  max-width: 33.33333%;
  padding: 0 10px;
}

.column img {
  margin-top: 20px;
  vertical-align: middle;
  width: 100%;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  padding: 1rem;
  background-color: white;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 1600px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 1200px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
