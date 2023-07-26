package com.aurora;

import com.aurora.model.dto.TopAndFeaturedArticlesDTO;
import com.aurora.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

/**
 * @Author xzj
 */
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = AuroraSpringbootApplication.class)
@ContextConfiguration
@Slf4j
public class DeliveryImmediateTest {
    @Autowired
    private ArticleService articleService;

    @Test
    public void listTopAndFeaturedArticles() {

        TopAndFeaturedArticlesDTO topAndFeaturedArticlesDTO = articleService.listTopAndFeaturedArticles();
        System.out.println(topAndFeaturedArticlesDTO);
    }


}
