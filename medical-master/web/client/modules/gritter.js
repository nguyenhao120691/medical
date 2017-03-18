const state = {
  enabled: true
}

const mutations = {
}

const mapedTypes = {
    default: {
        icon: false,
        no_icon: true,
        class_name: false    
    },
    info: {
        icon: 'info-circle',
        class_name: 'primary'
    },
    success: {
        icon: 'check-circle',
        class_name: 'success'
    },
    warning: {
        icon: 'exclamation-circle',
        class_name: 'warning'
    },
    danger: {
        icon: 'times-circle',
        class_name: 'danger'
    }

}

function gritt({title = '' , text = '', icon = '', no_icon = false , class_name = '', sticky = false, type = 'default'}){
    if (!class_name){
        if(!mapedTypes[type]){
            type = 'default'
        }

        class_name = mapedTypes[type].class_name
        no_icon = mapedTypes[type].no_icon
        icon = mapedTypes[type].icon     
    }

    if (!no_icon && icon){
        class_name = 'with-icon ' + icon + ' ' + class_name
    }

    $.gritter.add({
      title,
      text,
      class_name,
      sticky
    });
}

const actions = {
  alert(context, payload){
    gritt(payload)
  },
  warn(context, payload){
    gritt({type: 'warning', ...payload})
  },
  success(context, payload){
    gritt({type: 'success', ...payload})  
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}