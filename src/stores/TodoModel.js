import {observable, action} from 'mobx'

export default class TodoModel {
    store
    id
    @observable title
    @observable active

    constructor(store, title) {
        this.id = ((new Date()).getMilliseconds()).toString()
        this.store = store
        this.title = title
    }

    @action
    toggle() {
        this.active = !this.active
    }
}
