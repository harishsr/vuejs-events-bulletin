new Vue({
    // the element on the page this will go in: the 'events' id
    el: '#events',

    // any data we will need to use on the page
    data: {
        event: {
            name: '',
            description: '',
            date: ''
        },
        events: []
    },

    // any function(s) in the 'ready' key will run when the app loads
    ready: function() {
        // initialize some basic data
        this.fetchEvents();
    },

    // methods we'll use in the app
    methods: {
        fetchEvents: function(){
            var events = [
                {
                    id: 1,
                    name: 'Jacksonville Jumbo Shrimp Game',
                    description: 'A minor league baseball game',
                    date: '2017-07-22'
                },{
                    id: 2,
                    name: 'Birthday Party',
                    description: "Ramsey's wife Megan is throwing him a surprise 40th birthday party",
                    date: '2017-08-05'
                },{
                    id: 3,
                    name: 'Greece Work-cation',
                    description: 'Head to Crete, Greece with my wife for my work trip'
                }
            ];

            // $set is a convenience method Vue gives us to push data to an
            // array
            this.$set('events', events);
        },

        addEvent: function() {
            if(this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' }
            }
        }
    }
});
