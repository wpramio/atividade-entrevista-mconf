class MessagesController < ApplicationController
    def new
        @message = Message.new
    end

    def create
        @message = Message.create(msg_params)
        lookfor_mconf(@message.content)
        if @message.save
            ActionCable.server.broadcast 'room_channel',
            timestamp: @message.created_at.advance(hours: -3).to_formatted_s(:db),
            content: @message.content,
            contains_mconf: @message.contains_mconf?
        end
    end

    private
        def msg_params
            params.require(:message).permit(:content)
        end
        def lookfor_mconf(str)
            if str.match?(/mconf/i)
                str.gsub!(/mconf/i, 'Mconf')
                @message.set_contains_mconf!(true)
            else
                @message.set_contains_mconf!(false)
            end
        end
end
