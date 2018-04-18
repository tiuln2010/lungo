class HomeController < ApplicationController
    def index
    end

    
    
    def mail 
        @sender = params[:sender?]
        @content = params[:content]
        @email = 'tiuln2010@gmail.com'
        
        @msg = 'Sender :' + String(@sender) + '  Content :' + String(@content)

        require 'mailgun'

        # First, instantiate the Mailgun Client with your API key
        mg_client = Mailgun::Client.new 'key-aba7d5a018f2c5f5660930d7ecbcf128'
        
        # Define your message parameters
        message_params =  { from: 'cus@sandboxbfa3f691412e407f98d1aafa37c7ed3c.mailgun.org',
                            to: @email,
                            subject: 'Mail from customer!',
                            text: @msg 
                        }
        
        # Send your message through the client
        # result = mg_client.send_message('sandboxbfa3f691412e407f98d1aafa37c7ed3c.mailgun.org', message_params).to_h!
        
        # message_id = result['id']
        # message = result['message']
        
        redirect_to action: 'index'
    
        end
    end
end
