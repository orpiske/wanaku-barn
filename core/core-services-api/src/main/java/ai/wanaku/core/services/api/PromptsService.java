package ai.wanaku.core.services.api;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.List;
import ai.wanaku.capabilities.sdk.api.types.PromptReference;
import ai.wanaku.capabilities.sdk.api.types.WanakuResponse;

@Path("/api/v1/prompts")
public interface PromptsService {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    WanakuResponse<List<PromptReference>> list();
}
