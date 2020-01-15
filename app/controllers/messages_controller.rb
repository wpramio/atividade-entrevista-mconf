class MessagesController < ApplicationController
    def new
        @message = Message.new
    end

    def create
        @message = Message.create(msg_params)
        @message.content = lookfor_mconf(@message.content)
        if @message.save
            ActionCable.server.broadcast 'room_channel',
            timestamp: @message.created_at.advance(hours: -3).to_formatted_s(:db),
            content: @message.content
        end
    end

    private
        def msg_params
            params.require(:message).permit(:content)
        end
        def lookfor_mconf(str)
            return str.gsub(/mconf/i, 'Mconf')
        end
end
