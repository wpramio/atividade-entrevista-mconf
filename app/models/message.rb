class Message < ApplicationRecord
    validates :content, presence: true
    @contains_mconf = false
    def contains_mconf?
        return @contains_mconf
    end
    def set_contains_mconf!(set)
        @contains_mconf = set
    end
end
