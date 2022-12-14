const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: { 
            type: String,
            required: true,
            unqique: true,
            trim: true,
        },
        email: { 
            type: String, 
            required: true,
            unique: true,
            //validation
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = {User};
