<template>
  <div class="container">
    <ul v-for="menuItem in menuItems">
      <li><a clas="nav-item" :href="menuItem.link">{{ menuItem.name }}</a></li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      menuItems: [
        {
          name: "PROFIL",
          link: "#"
        },
        {
          name: "PORTFOLIO",
          link: "/#/portfolio"
        },
        {
          name: "À PROPOS",
          link: "/#/a-propos"
        },
        {
          name: "CONTACT",
          link: "/#/contact"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  width: 100%;
  height: initial;
  overflow: hidden;
  z-index: 99;
  background-color: white;
}
/* Toggle functionality */
#toggle {
  display: none;
}

#toggle:checked ~ .toggle-container .button-toggle {
      box-shadow: 0 0 0 2000px rgba(230,230,230,.8), inset 0 0 0 25px rgba(230,230,230,.8);
      background-color: transparent;
      border-radius: 0;
}

#toggle:checked ~ .toggle-container .button-toggle:before {
  -webkit-transform: translateY(-50%) rotate(45deg) scale(1);
  -ms-transform: translateY(-50%) rotate(45deg) scale(1);
  transform: translateY(-50%) rotate(45deg) scale(1);
}

#toggle:checked ~ .toggle-container .button-toggle:after {
  -webkit-transform: translateY(-50%) rotate(-45deg) scale(1);
  -ms-transform: translateY(-50%) rotate(-45deg) scale(1);
  transform: translateY(-50%) rotate(-45deg) scale(1);
}

#toggle:checked ~ .nav {
  margin-bottom: 120px;
  pointer-events: auto;
  -webkit-transform: translate(100px, 50px);
  -ms-transform: translate(100px, 50px);
  transform: translate(100px, 50px);
}

#toggle:checked ~ .nav .nav-item {
  color: black;
  letter-spacing: 0.25em;
      font-size: 1.5em;
      height: 2em;
      line-height: 2.5em;
      margin-top: 0;
  margin-top: 0;
  margin-bottom: 0.5em;
  opacity: 1;
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition: 0.5s, opacity 0.1s;
  transition: 0.5s, opacity 0.1s;
}

#toggle:checked ~ .nav .nav-item:nth-child(1) {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

#toggle:checked ~ .nav .nav-item:nth-child(1):before {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

#toggle:checked ~ .nav .nav-item:nth-child(2) {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

#toggle:checked ~ .nav .nav-item:nth-child(2):before {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

#toggle:checked ~ .nav .nav-item:nth-child(3) {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

#toggle:checked ~ .nav .nav-item:nth-child(3):before {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

#toggle:checked ~ .nav .nav-item:nth-child(4) {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

#toggle:checked ~ .nav .nav-item:nth-child(4):before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

#toggle:checked ~ .nav .nav-item:before {
  opacity: 0;
}

#toggle:checked ~ .dummy-content {
  padding-top: 30px;
}

#toggle:checked ~ .dummy-content:before {
  background-color: rgba(0, 0, 0, 0.3);
}
/* Toggle button */
.button-toggle {
  position: absolute;
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-left: 8px;
  margin-top: 18px;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  -webkit-transition: 0.6s;
  transition: 0.6s;
}


.button-toggle:after,
.button-toggle:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  border-radius: 5px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.button-toggle:before {
  -webkit-transform: translateY(-50%) rotate(45deg) scale(0);
  -ms-transform: translateY(-50%) rotate(45deg) scale(0);
  transform: translateY(-50%) rotate(45deg) scale(0);
}

.button-toggle:after {
  -webkit-transform: translateY(-50%) rotate(-45deg) scale(0);
  -ms-transform: translateY(-50%) rotate(-45deg) scale(0);
  transform: translateY(-50%) rotate(-45deg) scale(0);
}
/* Menu */
.nav {
  display: inline-block;
margin: 20px 10px 10px;
  pointer-events: none;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.nav-item {
  position: relative;
  display: inline-block;
  float: left;
  clear: both;
  color: transparent;
  font-size: 14px;
  letter-spacing: -6.2px;
  height: 7px;
  line-height: 7px;
  text-transform: uppercase;
  white-space: nowrap;
  -webkit-transform: scaleY(0.2);
  -ms-transform: scaleY(0.2);
  transform: scaleY(0.2);
  -webkit-transition: 0.5s, opacity 1s;
  transition: 0.5s, opacity 1s;
}

li .nav-item:nth-child(1) {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

li .nav-item:nth-child(1):before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

li .nav-item:nth-child(2) {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

li .nav-item:nth-child(2):before {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

li .nav-item:nth-child(3) {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

li .nav-item:nth-child(3):before {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

li .nav-item:nth-child(4) {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

li .nav-item:nth-child(4):before {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

nav li:nth-child(1) .nav-item  {
  letter-spacing: -4px
}

nav li:nth-child(2) .nav-item {
  letter-spacing: -6px;
}

nav li:nth-child(n+4) .nav-item  {
  letter-spacing: -3.5px;
  margin-top: -7px;
  opacity: 0;
}

li .nav-item:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  -webkit-transform: translateY(-50%) scaleY(5);
  -ms-transform: translateY(-50%) scaleY(5);
  transform: translateY(-50%) scaleY(5);
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

</style>
