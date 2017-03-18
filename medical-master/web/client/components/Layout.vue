<template>
  <div>
    <Header></Header>

    <section>
    <Sidebar></Sidebar>

      <div class="mainpanel">

        <div class="contentpanel">

          <ol class="breadcrumb breadcrumb-quirk">
            <li><a href="index.html"><i class="fa fa-home mr5"></i> Home</a></li>
            <li><a href="buttons.html">Pages</a></li>
            <li class="active">Blank</li>
          </ol>

          <!-- content goes here... -->

        </div>
        <!-- contentpanel -->
      </div>
      <!-- mainpanel -->
    </section>
  </div>
</template>

<script>
    import Header from './Header'
    import Sidebar from './Sidebar'

    export default {
        components: {
            Header,
            Sidebar
        }
    }
</script>