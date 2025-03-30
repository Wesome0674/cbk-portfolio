import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get('file');

    if (!file) {
        return NextResponse.json(
            { error: "No file specified" },
            { status: 400 }
        );
    }

    const filePath = path.join(process.cwd(), "public", file);
    const fileName = file;

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return NextResponse.json(
            { error: "File not found" },
            { status: 404 }
        );
    }

    // Define a mapping of file extensions to content types
    const contentTypeMap: Record<string, string> = {
        svg: "image/svg+xml",
        ico: "image/x-icon",
        png: "image/png",
        jpg: "image/jpeg",
        pdf: "application/pdf",
    };

    // Get the file extension
    const fileExtension = fileName.split(".").pop()?.toLowerCase() || "";

    // Determine the content type based on the file extension
    const contentType = contentTypeMap[fileExtension] || "application/octet-stream";

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Create and return the response
    return new NextResponse(fileBuffer, {
        headers: {
            "Content-Disposition": `attachment; filename="${fileName}"`,
            "Content-Type": contentType,
        },
    });
}
