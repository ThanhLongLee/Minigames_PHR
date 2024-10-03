using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Telegram.Bot;
using Telegram.Bot.Types;
using Telegram.Bot.Types.Enums;
using Unity.Common.Configuration;

namespace GomdoriMagazine.Controllers
{
    public class TeleBotController : Controller
    {
        private static string bottoken = AppSettings.Token;
        TelegramBotClient botClient = new TelegramBotClient(bottoken);

        [HttpPost]
        public async Task<ActionResult> Update(Update update)
        {
            if (update.Type == UpdateType.Message && update.Message.Type == MessageType.Text)
            {
                var message = update.Message;
                var chatId = message.Chat.Id;
                var messageText = message.Text;

                if (!string.IsNullOrEmpty(messageText) && messageText.StartsWith("/"))
                {
                    if (messageText == "/start")
                    {                       
                        await botClient.SendTextMessageAsync(chatId, "Xin chào tôi là bot demo.");
                    }
                    else
                    {
                        await botClient.SendTextMessageAsync(chatId, "Lệnh không hợp lệ.");
                    }
                }
            }

            return new HttpStatusCodeResult(200);
        }
    }
}