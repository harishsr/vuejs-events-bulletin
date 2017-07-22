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
    mounted: function() {
        // initialize some basic data
        this.fetchEvents();
    },

    // methods we'll use in the app
    methods: {
        fetchEvents: function(){
            var new_events = [
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

            
            // add new_events to the events array.  
            // I couldn't figure out $set so I improvised.
            for (i = 0; i < new_events.length; i++){
                this.events.push(new_events[i]);
            }
        },

        // add new events
        addEvent: function() {
            if(this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' }
            }
        },

        // delete events
        deleteEvent: function(index) {
            if(confirm("Are you sure, Gangsta?")){
                this.events.splice(index, 1);
            }
        }
    }
});
