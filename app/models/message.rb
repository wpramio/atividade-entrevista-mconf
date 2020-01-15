class Message < ApplicationRecord
    validates :content, presence: true
    @contains_mconf = false
    def contains_mconf?
        return @contains_mconf
    end
    def contains_mconf!
        @contains_mconf = true
    end
end
