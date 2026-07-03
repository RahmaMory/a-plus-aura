function createResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function cleanValue(value, maximumLength) {
  return String(value ?? "")
    .trim()
    .slice(0, maximumLength);
}

export default {
  async fetch(request) {
    if (request.method !== "POST") {
      return createResponse(
        {
          success: false,
          message: "Method not allowed.",
        },
        405,
      );
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return createResponse(
        {
          success: false,
          message: "Google Sheets connection is not configured.",
        },
        500,
      );
    }

    try {
      const requestBody = await request.json();

      const payload = {
        name: cleanValue(requestBody.name, 150),
        phone: cleanValue(requestBody.phone, 80),
        email: cleanValue(requestBody.email, 200),
        service: cleanValue(requestBody.service, 300),
        industry: cleanValue(requestBody.industry, 300),
        source: cleanValue(
          request.headers.get("referer") || "A Plus Aura Website",
          500,
        ),
      };

      if (
        !payload.name ||
        !payload.phone ||
        !payload.email ||
        !payload.service ||
        !payload.industry
      ) {
        return createResponse(
          {
            success: false,
            message: "Please complete all required fields.",
          },
          400,
        );
      }

      const googleResponse = await fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      const responseText = await googleResponse.text();

      let googleResult;

      try {
        googleResult = JSON.parse(responseText);
      } catch {
        console.error("Invalid Google response:", responseText);

        return createResponse(
          {
            success: false,
            message:
              "Google Sheets returned an invalid response. Check the Apps Script deployment.",
          },
          502,
        );
      }

      if (!googleResponse.ok || !googleResult.success) {
        return createResponse(
          {
            success: false,
            message:
              googleResult.message ||
              "The request could not be saved to Google Sheets.",
          },
          502,
        );
      }

      return createResponse({
        success: true,
        message: "Project request submitted successfully.",
      });
    } catch (error) {
      console.error("Project form error:", error);

      return createResponse(
        {
          success: false,
          message: "Unable to send your request. Please try again.",
        },
        500,
      );
    }
  },
};